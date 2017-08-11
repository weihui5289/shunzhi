import React, { Component } from 'react'
import editIcon from './editIcon.svg'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'

class ProfileEditable extends Component {

  state = {
    edit: false,
    image: '',
    slogan: this.props.user.slogan ? this.props.user.slogan : '还没有填写个性签名'
  }

  edit = () => {
    console.log('edit')
    this.setState({
      edit: true
    })
  }

  updateUser = (e) => {
    e.preventDefault()
    let slogan = this.sloganInput.value
    let data = {
      username: this.props.user.username,
      slogan
    }
    console.log(data)
    axios.put(`${Settings.host}/user`, data).then( res => {
      console.log('user, from server...', res.data)
      this.props.dispatch({ type: 'UPDATE_USER', user: res.data.user, userId: this.props.userId  })
      this.setState({
        edit: false
      })
    })

  }

  handleChange = (event) => {
    // 注意：手机上拍照上传会失败，是因为 niginx 对上传文件的大小是有限制的，
    // 最大就是 1M ，可以通过修改 /etc/nginx/site-enabled/xxx.conf 文件来解决
      const file = event.target.files[0];
      let formData = new FormData()
      console.log('handleChange....');
      if (!file.type.match('image.*')) {
        console.log('请上传图片');
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log('onload.....');
          this.setState({
            image: event.target.result,
          });
          // console.log('image staee', this.state.image)
          formData.append('avatar', file)
          formData.append('userId', this.props.userId )
          console.log('formData..', formData)
          axios.post(`${Settings.host}/avatar`, formData ).then(
            res => {
              console.log(res.data)
              this.props.dispatch({ type: 'UPDATE_USER', userId: this.props.userId , user: { ...this.props.user, avatar: res.data.user.avatar }})
            }
          )

        }
        console.log('reader.read....')
        reader.readAsDataURL(file);
      }
    }

  editSlogan = () => {
    this.setState({
      slogan: this.sloganInput.value
    })
  }

  render(){
    const { user } = this.props
    const  { avatar, username } = user
    const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    const hisUsername = username ? username : 'no name'

    let editForm = (
      <form className="profile-form"
        onSubmit={this.updateUser}>
        <input className="profile-slogan-input"
          ref={value => this.sloganInput = value}
          type="text"  value={this.state.slogan}
          onChange={this.editSlogan}
          />
        <button type="submit">保存</button>
      </form>
    )

    return(
      <div className="profile-editable">


        <label className="profile-upload-img"
          style={{
            'backgroundImage': `url(${this.state.image ? this.state.image : hisAvatar})`,
           }}
          >
          <input type='file' className='profile-image-input'
            onChange={this.handleChange}
            />
        </label>

        <div className="profile-username-slogan">
          <div className="profile-username">
            {hisUsername}
          </div>
          <div className="profile-slogan">
            { this.state.edit ? editForm : this.state.slogan }
          </div>
        </div>
        <div onClick={this.edit}
          className="profile-edit-btn">
          <img src={editIcon} alt="edit" />
        </div>
      </div>
    )
  }
}

export default connect(null)(ProfileEditable)
