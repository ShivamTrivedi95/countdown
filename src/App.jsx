import React, { useState } from "react";
import { Button, Card, Divider, Flex, Statistic, notification } from "antd";

import { SmileOutlined } from "@ant-design/icons";
import Confetti from "react-confetti";

const { Countdown } = Statistic;

const App = () => {
  const deadline = 1705775400000;

  const [showConfetti, setShowConfettie] = useState(false);

  const onFinish = () => {
    console.log("finished!");
  };

  const openNotification = () => {
    setShowConfettie(true);
    api.open({
      message: "Wait Sweety!!",
      description: "One surprise is waiting for you. But for this you need to wait until the timer gets finished.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });

    setTimeout(() => {
      setShowConfettie(false);
    }, 8000);
  };

  const [api, contextHolder] = notification.useNotification();
  return (
    <Flex justify="center" align="center" style={{ width: "100%" }}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} friction={1} opacity={0.6} />}
      <Card
        style={{
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
      >
        <Countdown title="Waiting..." value={deadline} format="D day, HH:mm:ss" />
        <Divider />
        <Button block onClick={() => openNotification()}>
          Click here
        </Button>
      </Card>
      {contextHolder}
    </Flex>
  );
};

export default App;
