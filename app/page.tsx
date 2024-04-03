"use client";

import React from "react";
import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Modal,
  Space,
  Tooltip,
} from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  EditOutlined,
  LogoutOutlined,
  SettingOutlined,
  ExclamationCircleFilled,
  PinterestFilled,
  GoogleCircleFilled,
} from "@ant-design/icons";

const { confirm } = Modal;
const { Meta } = Card;

const showPromiseConfirm = () => {
  confirm({
    title: "Do you want to SignOut?",
    icon: <ExclamationCircleFilled />,
    content:
      "When clicked the Yups button, your account was signOut & this dialog will be closed after 1 second",
    onOk() {
      return new Promise((resolve, reject) => {
        signOut();
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    okText: <p>Yups</p>,
    onCancel() {},
  });
};

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className='App flex w-full min-h-screen place-items-center place-content-center'>
      {!session ? (
        <div className='flex flex-col gap-2'>
          <Button
            type='primary'
            icon={<GoogleCircleFilled />}
            onClick={() => signIn("google")}>
            Sign in with Google
          </Button>
          <Button
            type='primary'
            style={{
              backgroundColor: "#e60023",
            }}
            icon={<PinterestFilled />}
            onClick={() => signIn("pinterest")}>
            Sign in with Pinterest
          </Button>
        </div>
      ) : (
        <Space wrap>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={[
              <SettingOutlined key='setting' />,
              <EditOutlined key='edit' />,
              <Tooltip
                title='SignOut'
                color={"red"}>
                <LogoutOutlined
                  key='logout'
                  onClick={showPromiseConfirm}
                />
              </Tooltip>,
            ]}>
            <Meta
              avatar={<Avatar src={session?.user?.image} />}
              title={session?.user?.name}
              description={session?.user?.email}
            />
          </Card>
        </Space>
      )}
    </div>
  );
};

const IsHome = () => (
  <ConfigProvider
    theme={
      {
        // 1. Use dark algorithm
        // token: {
        //   // Seed Token
        //   colorPrimary: "#00B96B",
        // },
        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }
    }>
    <Home />
  </ConfigProvider>
);
export default IsHome;
