import { Modal, Form, Input } from 'antd';

const AddTicketForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new Ticket"
      okText="Create"
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
          name="title"
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
        <Form.Item name="description" label="Ticket Description"
        rules={[
            {
                required: true,
                message: 'Please write the description of the ticket.'
            }]}
            >
          <Input.TextArea showCount maxLength={150}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTicketForm