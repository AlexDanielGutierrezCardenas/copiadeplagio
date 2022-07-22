import { useState } from 'react';

const useForm = (initForm) => {
    const [form, setForm] = useState(initForm);
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    const handlerChangeForm = ({ target }) => {
        setForm({...form, [target.name]: target.value});
    };
    const handlerResetForm = () => {
        setForm(initForm);
    };
    return [input,setInput, error,setError, form, handlerChangeForm, handlerResetForm];
}
export default useForm;