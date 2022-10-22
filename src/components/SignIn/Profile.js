import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import {auth} from '../../conf/fireconf'

import Home from '../../components/Home/home.js'

function Profile() {
    return(
    <Home/>
    )
}

export default Profile