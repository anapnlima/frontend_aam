import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.0.58:8080/BackendAAM-0.0.1/api',
    // headers: {
    //     Authorization: 'Bearer 3E6JF1FJejj-5K3ny2aaVp7o-i1JdWeWqQEh1VSt3B9qB_gB8hMrTgU-ym115bEPx1V7PaypREAFzQez4RGoWlN8BSWwkDsIPgK1N6_Hv07XsaTftIP6H_6rd_UHXnYx'
    // }
});