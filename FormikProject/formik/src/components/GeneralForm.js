import React from 'react'
import { useFormik } from 'formik'

function GeneralForm() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
    });

    // console.log(formik);
    return (
        <form>
            <div>
                <label>Email</label>
                <input type='email' value={values.email} id='email' placeholder='Mail adresinizi giriniz' onChange={handleChange} />
            </div>
            <div>
                <label>Yaş</label>
                <input type='number' value={values.age} id='number' placeholder='Yaşınızı giriniz' onChange={handleChange} />
            </div>
            <div>
                <label>Şifre</label>
                <input type='password' value={values.password} id='password' placeholder='Şifrenizi giriniz' onChange={handleChange} />
            </div>
            <div>
                <label>Şifre tekrar</label>
                <input type='password' value={values.confirmPassword} id='password' placeholder='Şifrenizi tekrar giriniz' onChange={handleChange} />
            </div>
            <button type='submit'>Kaydet</button>

        </form>
    )
}

export default GeneralForm