import React, { useState, useEffect } from "react";
import Form, { Field } from "rc-field-form";
import {
  Layout,
  PageHeader,
  Card,
  Input,
  Button,
  Radio,
  Checkbox,
  Tooltip,
  Cascader,
  Select,
  AutoComplete,
  Divider,
  Menu,
  Dropdown,
} from "antd";

const sowOptions = [
  {
    name: "DXI",
    subOptions: ["option1", "option2", "option3"],
  },
  {
    name: "GGG",
    subOptions: ["option1", "option2", "option3"],
  },
  {
    name: "ABC",
    subOptions: ["option1", "option2", "option3"],
  },
];

function SOW_Form() {
  const [form, setForm] = useState({
    sow: [],
  });
  const [uiVisibility, setUiVisibility] = useState({
    sow: false,
    teradata: false,
    customServices: false,
  });

  const handleCategories = (name) =>
    setUiVisibility({ ...uiVisibility, [name]: !uiVisibility[name] });

  const handleDropdowns = (key, value) => {
    setForm({ ...form, [key]: [...form[key], value] });
  };

  console.log(form);

  return (
    <div>
      <div>
        <Button onClick={() => handleCategories("sow")}>Product Sow</Button>
        {uiVisibility.sow &&
          sowOptions.map((option) => (
            <Card>
              <Dropdown
                overlay={
                  <Menu>
                    {option.subOptions.map((cell) => (
                      <Menu.Item onClick={() => handleDropdowns("sow", cell)}>
                        {cell}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <h3>{option.name}</h3>
              </Dropdown>
            </Card>
          ))}
      </div>
      <div>
        <Button onClick={() => handleCategories("teradata")}>
          customServices
        </Button>
      </div>
      <div>
        <Button onClick={() => handleCategories("customServices")}>
          customServices
        </Button>
      </div>
    </div>
  );
}

export default SOW_Form;

// ============================================
// ============================================

// import React, { useState } from "react";
// import {
//   Form,
//   Input,
//   Tooltip,
//   Cascader,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Button,
//   AutoComplete,
// } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
// const residences = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const RegistrationForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(
//         [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
//       );
//     }
//   };

//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));
//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ["zhejiang", "hangzhou", "xihu"],
//         prefix: "86",
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: "email",
//             message: "The input is not valid E-mail!",
//           },
//           {
//             required: true,
//             message: "Please input your E-mail!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={["password"]}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: "Please confirm your password!",
//           },
//           ({ getFieldValue }) => ({
//             validator(rule, value) {
//               if (!value || getFieldValue("password") === value) {
//                 return Promise.resolve();
//               }

//               return Promise.reject(
//                 "The two passwords that you entered do not match!"
//               );
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="nickname"
//         label={
//           <span>
//             Nickname&nbsp;
//             <Tooltip title="What do you want others to call you?">
//               <QuestionCircleOutlined />
//             </Tooltip>
//           </span>
//         }
//         rules={[
//           {
//             required: true,
//             message: "Please input your nickname!",
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="residence"
//         label="Habitual Residence"
//         rules={[
//           {
//             type: "array",
//             required: true,
//             message: "Please select your habitual residence!",
//           },
//         ]}
//       >
//         <Cascader options={residences} />
//       </Form.Item>

//       <Form.Item
//         name="phone"
//         label="Phone Number"
//         rules={[
//           {
//             required: true,
//             message: "Please input your phone number!",
//           },
//         ]}
//       >
//         <Input
//           addonBefore={prefixSelector}
//           style={{
//             width: "100%",
//           }}
//         />
//       </Form.Item>

//       <Form.Item
//         name="website"
//         label="Website"
//         rules={[
//           {
//             required: true,
//             message: "Please input website!",
//           },
//         ]}
//       >
//         <AutoComplete
//           options={websiteOptions}
//           onChange={onWebsiteChange}
//           placeholder="website"
//         >
//           <Input />
//         </AutoComplete>
//       </Form.Item>

//       <Form.Item
//         label="Captcha"
//         extra="We must make sure that your are a human."
//       >
//         <Row gutter={8}>
//           <Col span={12}>
//             <Form.Item
//               name="captcha"
//               noStyle
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the captcha you got!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Button>Get captcha</Button>
//           </Col>
//         </Row>
//       </Form.Item>

//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value
//                 ? Promise.resolve()
//                 : Promise.reject("Should accept agreement"),
//           },
//         ]}
//         {...tailFormItemLayout}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// ReactDOM.render(<RegistrationForm />, mountNode);
