import React, { useState } from "react";
import { Input, Row, Col, Card, Typography, Button } from "antd";

// card
const { Title } = Typography;

function App() {
  const [val, setval] = useState("");
  const [operatorfun, setoperatorfun] = useState("");
  const [number1, setnumber1] = useState("");
  let num1,num2,result,a;
  const clickvalue = value =>{
    setval(val + value);
  }
  const operator = value =>{
   num1 = val;
   setnumber1(num1);
   setval("");
   setoperatorfun(value);
  }
  const clear =() =>{
    setval("");
  }
  function backspace(){
    setval(val.slice(0,-1));
  }
  const equal = () =>{
    num2 = val;
 
   if (operatorfun==='+'){
      result= eval(`${number1}+${num2}`);
      console.log(result);
   }
   else if (operatorfun==='-'){
    result= number1 - num2;
    console.log(result);
 }
 else if (operatorfun==='/'){
  result= number1 / num2;
  console.log(result);
}
else if (operatorfun==='*'){
  result= number1 * num2;
  console.log(result);
}
else if (operatorfun==='sin'){
  result=Math.sin(number1);
}
else if (operatorfun==='cos'){
  result=Math.cos(number1);
}
else if (operatorfun==='tan'){
  result=Math.tan(number1);
}
else if (operatorfun==='log'){
  result=Math.log(number1);
}
else if (operatorfun==='root'){
  result=Math.pow(number1, 1 / 2);
}
else if (operatorfun==='rand'){
  result=Math.floor(Math.random() * 1000);
}
else if (operatorfun==='pie'){
  result=number1*Math.PI;
}
else if (operatorfun==='%'){
  result=number1%num2;
}
else if (operatorfun==='e'){
  result=Math.E*number1;
}
else if (operatorfun==='squ'){
  result=number1*number1;
}
else if (operatorfun==='cube'){
  result=number1*number1*number1;
}
else if (operatorfun==='fact'){
  let facto=1;
  for (let i = 2; i <= number1; i++)
  {
      facto= facto * i;
  }
  result=facto;
}


  a= result.toString();
   setval(a);
  }


  return (
    <div className="App">
      <>
        <Row justify="center">
          <Col span={24}>
            <Card style={{ height: 100 }}>
              <Title level={1}>Calculator</Title>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row justify="center">
          <Col span={6}>
            <Input  size="large" value={val} />
          </Col>
        </Row>
        <br />
        <br />
        <Row gutter={[16, 24]} justify="center">
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ width: 90 }}
              onClick={clear}
            >
              clear
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={1}>
            <Button
              type="primary"
              shape="circle"
              size="large"
              onClick={backspace}
            >
              AC
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="/"
              onClick={()=> operator("/")}
            >
              /
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="7"
              onClick={()=>clickvalue("7")}
            >
              7
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="8"
              onClick={()=>clickvalue("8")}
            >
              8
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="9"
              onClick={()=>clickvalue(9)}
            >
              9
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="*"
              onClick={()=> operator("*")}
            >
              x
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="4"
              onClick={()=>clickvalue(4)}
            >
              4
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="5"
              onClick={()=>clickvalue(5)}
            >
              5
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="6"
              onClick={()=>clickvalue(6)}
            >
              6
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="-"
              onClick={()=> operator("-")}
            >
              -
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="3"
              onClick={()=>clickvalue(3)}
            >
              3
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="2"
              onClick={()=>clickvalue(2)}
            >
              2
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="1"
              onClick={()=>clickvalue(1)}
            >
              1
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="+"
              onClick={()=> operator("+")}
            >
              +
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="0"
              onClick={()=>clickvalue(0)}
            >
              0
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="."
              onClick={()=>clickvalue(".")}
            >
              .
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ width: 90 }}
              onClick={equal}
            >
              =
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="sin"
              onClick={()=>operator("sin")}
            >
              sin
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="cos"
              onClick={()=>operator("cos")}
            >
              cos
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="tan"
              onClick={()=>operator("tan")}
            >
              tan
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="log"
              onClick={()=>operator("log")}
            >
              log
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="root"
              onClick={()=>operator("root")}
            >
              root
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="rand"
              onClick={()=>operator("rand")}
            >
              rand
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="pie"
              onClick={()=>operator("pie")}
            >
              pie
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="%"
              onClick={()=>operator("%")}
            >
              %
            </Button>
          </Col>
          <Col className="gutter-row" span={1} offset={10}>
            <Button
              shape="circle"
              size="large"
              name="e"
              onClick={()=>operator("e")}
            >
              e
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="squ"
              onClick={()=>operator("squ")}
            >
              squ
            </Button>
          </Col>
          <Col className="gutter-row" span={1}>
            <Button
              shape="circle"
              size="large"
              name="cube"
              onClick={()=>operator("cube")}
            >
              cube
            </Button>
          </Col>
          <Col className="gutter-row" span={11}>
            <Button
              shape="circle"
              size="large"
              name="fact"
              onClick={()=>operator("fact")}
            >
              fact
            </Button>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default App;
