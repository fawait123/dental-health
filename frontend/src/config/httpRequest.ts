import axios from 'axios';
// fungsi untuk handle notification
// import { toast } from 'react-toastify';

// Create Base URL nya
const httpRequest = axios.create({
  baseURL: 'http://127.0.0.1:4000',
});

// Set token yang berada di localStorage sebagai header bearernya dengan menggunakan interceptor
httpRequest.interceptors.request.use((config) => {
  config.headers['Authorization'] =
    'Bearer ' + window.localStorage.getItem('token');
  return config;
});

// Tampilkan notification berdasarkan response setiap kali hit API
httpRequest.interceptors.response.use(
  (response) => {
    // if (response?.config?.method === 'post') {
    //   if (response?.config?.url !== 'login') {
    //     toast.success(response?.data?.message, {
    //       icon: '🚀',
    //     });
    //   }
    // } else if (response?.config?.method === 'put') {
    //   toast.success(response?.data?.message, {
    //     icon: '🚀',
    //   });
    // } else if (response?.config?.method === 'delete') {
    //   toast.success(response?.data?.message, {
    //     icon: '🚀',
    //   });
    // }
    return response;
  },
  (error) => {
    // if (error?.response?.data?.message) {
    //   console.log('ada error');
    //   toast.error(error?.response.data?.message, {
    //     icon: '🚀',
    //   });
    // }
    // if (error.response.config.url === "admin/combat-area/v2") {
    //   if (error.response.config.method) {
    //     if (
    //       error.response.data.message !== undefined &&
    //       error.response.data.message !== null
    //     ) {
    //       if (error.response.data.message.length !== 0) {
    //         console.log("errr");
    //         handleNotification("error", "Error", "Handphone must be unique");
    //       }
    //     }
    //   }
    // }

    // if (!error?.response) {
    //   handleNotification("error", "Error", "Something went wrong");
    // }
    // if (error?.response?.data?.message) {
    //   if (error?.response?.config?.url !== "admin/combat-area/v2") {
    //     handleNotification("error", "Error", error?.response?.data?.message);
    //   }
    // }

    // if (error?.response?.status === 401) {
    //   handleNotification("error", "Error", error?.response?.data?.message);
    // }
    return Promise.reject(error);
  }
);

export default httpRequest;
