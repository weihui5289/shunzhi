import React, { Component } from 'react'
import  Settings  from '../../../settings'

import { Form, Input, Button, Icon,  message } from 'antd'
import './new-dish.css'

import axios from 'axios'

const FormItem = Form.Item


class NewDish extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    let formData =  this.props.form.getFieldsValue()
    let unFilled = Object.keys(formData).filter(
      prop => {
         return (!formData[prop])
      }
    )

    if(unFilled.length === 0) {
      const username = formData.name
      const password = formData.password
      const settledFee = formData.settledFee
      const settledExpiredDate = formData.rangePicker ? formData.rangePicker[1]._d : {}

      const data = { username, password, settledFee }

      axios.post(`${Settings.host}/auth/school`, data)
        .then( res => {
          message.info('账户添加成功');
        })
        .catch( (error) => {
          let errMesg = error.response.data.error
          alert(errMesg)
        })
      this.props.form.resetFields()
    }else {
      alert("请填入全部信息")
    }

  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render = () => {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const config = {
      rules: [{ type: 'string', required: true, message: '必填项目' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    return (
    <div className='single page'>
    <div className='white-block details'>
    <Form onSubmit={this.handleSubmit} className='signup-form'>
      <FormItem>
        {getFieldDecorator('name', config)(
        <Input prefix={<Icon type='user' style={{ fontSize: 14 }} />}
        placeholder='账户名'
        type='text'
        name='name' />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', config)(
        <Input prefix={<Icon type='lock' style={{ fontSize: 14 }} />}
        placeholder='密码'
        type='password'
        name='password'
        />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('settledFee', config)(
        <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 14 }} />}
        placeholder='入驻费'
        type='text'
        name='settledFee' />
        )}
      </FormItem>

      <FormItem>
        <Button type='primary' htmlType='submit' disabled={this.hasErrors(getFieldsError())} className='signup-form-button'>添加账户</Button>
      </FormItem>
    </Form>
  </div>
</div>
  )}
}

NewDish = Form.create({})(NewDish)

export default NewDish
