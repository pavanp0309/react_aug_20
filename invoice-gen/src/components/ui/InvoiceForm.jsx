import {useEffect} from 'react'
import { useInvoiceData } from '../../context/invoiceFormContext'
import { Button, Form, Input, Select, Space ,InputNumber ,Divider} from 'antd';
// for dynamic forms we use these icons
import { MinusCircleFilled,PlusCircleFilled } from '@ant-design/icons';

let addfields=()=>({description:"",qty:1,rate:0})


const InvoiceForm = () => {
   const [form] = Form.useForm();
   const {invoiceData,setInvoiceData}=useInvoiceData()

  //  useEffect for handling the form invoice  data 
  useEffect(()=>{
    if(invoiceData){
      const values={...invoiceData}
    }

  },[]) // empty dependency

  return (
    <div className='container'>
      <Form className="row"   form={form}>
        <Divider>Sender Details</Divider>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Form.Item name={['sender',"company"]} label="company" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name={['sender',"email"]} label="Email" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name={['sender',"address"]} label="Address" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
                  <Form.Item name={['sender',"phone"]} label="Phone" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          
        </div>
        {/* client details */}
         <Divider>Clinet Details</Divider>
             <div className="col-sm-12 col-md-12 col-lg-12">
          <Form.Item name={['client',"company"]} label="company" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name={['client',"email"]} label="Email" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name={['client',"address"]} label="Address" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
                  <Form.Item name={['client',"phone"]} label="Phone" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          
        </div>

        {/* dynamic forms */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Form.List name="items">
            {/* dynamic field when user clicks on the add button */}
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              {/* description field */}
              <Form.Item {...restField} name={[name, 'description']} rules={[{ required: true}]}>
                <Input placeholder="describe the product" />
              </Form.Item>
                {/* description field end */}
                {/* qty field */}
              <Form.Item {...restField} name={[name, 'qty']} rules={[{ required: true}]}>
                <InputNumber min={0}/>
              </Form.Item>
              {/* qty end */}
              {/* price */}
              <Form.Item {...restField} name={[name, 'rate']} rules={[{ required: true}]}>
                <InputNumber min={0}/>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add(addfields())} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
         </Form.List>

        </div>
        
         <div className="col-sm-12 col-md-12 col-lg-12">
          
         </div>


      </Form>
      
    </div>
  )
}

export default InvoiceForm
