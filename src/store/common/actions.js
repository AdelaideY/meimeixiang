import axios from 'axios'
import CHANGE_USER_STATE from './const'
const actions = {
    actions_login(context,{code,phone,success,fail}){
        axios.get('/meimei/h5/sms/getAuth?userName='+phone.value+'&type=2')
        .then(res=>{
            if(res.status !== 200){
                fail()
            }else{
                context.commit({
                    type:CHANGE_USER_STATE,
                    user_state: res.data.data.data
                })
                success(res.data.data.data)
            }
        })
    }
}
export default actions