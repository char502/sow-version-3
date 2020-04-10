import React, { useState, useEffect } from "react";
import {
  Layout,
  PageHeader,
  Card,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Tooltip,
  Cascader,
  Select,
  AutoComplete,
  Divider,
} from "antd";

import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Content } = Layout;

const AutoCompleteOption = AutoComplete.Option;

function SOW_Form() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div>
      <Content style={{ padding: "25px", backgroundColor: "#F0F2F5" }}>
        <div className="site-layout-content">
          <Form
            initialValues={{
              productSOW: false,
            }}
            /* onFinish={onFinish}
            onFinishFailed={onFinishFailed} */
          >
            {/* <PageHeader
              title="Service Region"
              /* subTitle="This is a subtitle" 
              /> */}
            <Card title="Service Region" bordered={true} style={{ width: 900 }}>
              <Form.Item name="radio-group" /* label="Customer Information" */>
                <div>
                  <Radio.Group>
                    <Radio value="a">EMEA</Radio>
                    <Radio value="b">APAC</Radio>
                    <Radio value="c">NA & LATAM</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>
            </Card>
            <Divider />
            <Card
              title="Customer Information"
              bordered={true}
              style={{ width: 900 }}
            >
              <Form.Item
                name="customer-information"
                /* label="Customer Information" */
              >
                <Form.Item
                  label="Company Name"
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input company name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Address Line1"
                  name="AddressLine1"
                  rules={[
                    {
                      required: true,
                      message: "Please input Address Line1!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Address Line2"
                  name="AddressLine2"
                  rules={[
                    {
                      required: true,
                      message: "Please input company name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Address Line3"
                  name="AddressLine3"
                  rules={[
                    {
                      required: true,
                      message: "Please input company name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Town/City"
                  name="TownCity"
                  rules={[
                    {
                      required: true,
                      message: "Please input Town/City!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Region"
                  name="Region"
                  rules={[
                    {
                      required: true,
                      message: "Please input Region!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Postcode/Zip"
                  name="postcodeZip"
                  rules={[
                    {
                      required: true,
                      message: "Please input Region!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please input Country!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="website"
                  label="Website"
                  rules={[
                    {
                      required: true,
                      message: "Please input website!",
                    },
                  ]}
                >
                  <AutoComplete
                    options={websiteOptions}
                    onChange={onWebsiteChange}
                    placeholder="website"
                  >
                    <Input />
                  </AutoComplete>
                </Form.Item>
              </Form.Item>
            </Card>
            <Divider />
            <Card title="SOW Type" bordered={true} style={{ width: 900 }}>
              <h3>What type of SOW do you want to generate?</h3>
              <Form.Item name="productSOW" valuePropName="productSOW">
                <Checkbox>Product SOW</Checkbox>
              </Form.Item>
              <Form.Item
                name="teradataCustomerSOW"
                valuePropName="teradataCustomerSOW"
              >
                <Checkbox>Teradata Customer SOW</Checkbox>
              </Form.Item>
              <Form.Item
                name="customProfessionalServicesSOW"
                valuePropName="customProfessionalServicesSOW"
              >
                <Checkbox>Custom Professional Services SOW</Checkbox>
              </Form.Item>
            </Card>
            <Form.Item style={{ padding: "20px" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
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
