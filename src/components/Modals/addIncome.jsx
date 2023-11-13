import React from "react";

import { Button,Modal,Form,Input,DatePicker,Select } from "antd";

function AddIncome({
    isIncomeModalVisible,
    handleIncomeCancel,
    onFinish
}){
const [form] = Form.useForm()
    return(
        <Modal
        style={{fontWeight:600}}
        title='Add Income'
        open={isIncomeModalVisible}
        onCancel={handleIncomeCancel}
        footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={(values)=>{
                    onFinish(values,'income')
                    form.resetFields();
                }}
            >
                <Form.Item
                    style={{fontWeight:600}}
                    label="Name"
                    name='name'
                    rules={[
                        {
                            required:true,
                            message:'Please input the name of the transaction!'
                        },
                    ]}
                >
                    <Input type="text" className="custom-input"></Input>
                </Form.Item>

                <Form.Item
                    style={{fontWeight:600}}
                    label="Amout"
                    name='amount'
                    rules={[
                        {
                            required:true,
                            message:'Please input the expense amount!'
                        },
                    ]}
                >
                    <Input type="number" className="custom-input"></Input>
                </Form.Item>

                <Form.Item
                    style={{fontWeight:600}}
                    label="Date"
                    name='date'
                    rules={[
                        {
                            required:true,
                            message:'Please input the date!'
                        },
                    ]}
                >
                    <DatePicker className="custom-input" format='YYYY-MM-DD'></DatePicker>
                </Form.Item>

                <Form.Item
                    style={{fontWeight:600}}
                    label="Tag"
                    name='tag'
                    rules={[
                        {
                            required:true,
                            message:'Please select the tag!'
                        },
                    ]}
                >
                    <Select className="custom-input select">
                        <Select.Option value='salary'>Salary</Select.Option>
                        <Select.Option value='freelance'>Freelance</Select.Option>
                        <Select.Option value='invetment'>Investment</Select.Option>

                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button className="btn btn-blue" type="primary"  htmlType="submit">
                        Add Income
                    </Button>
                </Form.Item>

            </Form>

        </Modal>
    )

}
export default AddIncome