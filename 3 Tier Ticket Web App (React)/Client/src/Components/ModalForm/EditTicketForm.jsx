import { Modal, Form, Input } from 'antd';

const EditTicketForm = ({ visible, onCreate, onCancel, cellValues }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Edit your ticket"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="_id"
          initialValue={cellValues.row._id}
          label="_Id"
          hidden={true}
          rules={[
            {
              message: 'Please input the subject!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          initialValue={cellValues.row.ticket_sub}
          label="Subject"
          rules={[
            {
              required: true,
              message: 'Please input the subject!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Ticket Description" initialValue={cellValues.row.ticket_desc}
        rules={[
            {
                required: true,
                message: 'Please write the description of the ticket.'
            }]}
            >
          <Input.TextArea showCount maxLength={100}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTicketForm