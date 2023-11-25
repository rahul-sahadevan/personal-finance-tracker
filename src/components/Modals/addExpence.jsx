import React from "react";
import { Button,Modal,Form,Input,DatePicker,Select } from "antd";

// expense modal component--------------
function AddExpence({
    isExpenseModalVisible,
    handleExpenseCancel,
    onFinish
}){
    const [form] = Form.useForm()
    return(
        <Modal
        style={{fontWeight:600}}
        title='Add Expense'
        open={isExpenseModalVisible}
        onCancel={handleExpenseCancel}
        footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={(values)=>{
                    onFinish(values,'expense')
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
                        <Select.Option className="option" value='food'>Food</Select.Option>
                        <Select.Option className="option" value='education'>Education</Select.Option>
                        <Select.Option className="option" value='office'>Office</Select.Option>

                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button className="btn btn-blue" type="primary" htmlType="submit">
                        Add Income
                    </Button>
                </Form.Item>

            </Form>

        </Modal>
    )

}
export default AddExpence