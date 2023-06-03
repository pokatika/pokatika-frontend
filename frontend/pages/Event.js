import { useEffect } from "react";

const Event = () => {
  const test = async () => {
    const response = await fetch(
      "https://3r0ty62llj.execute-api.us-west-1.amazonaws.com/default/pokatika"
    );
    console.log(response);
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div>
      Event
      <button>버튼</button>
    </div>
  );
};

export default Event;
