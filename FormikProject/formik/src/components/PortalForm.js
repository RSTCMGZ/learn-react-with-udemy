import React from 'react'
import { Form, Formik } from 'formik'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckBox from './CustomCheckbox'
import { Link } from 'react-router-dom'

const onsubmit = async (values, actions) => {


    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
    actions.resetForm()
}
function PortalForm() {
    return (
        <>
            <Formik
                initialValues={{ username: '', university: '', isAccepted: false }}
                onSubmit={onsubmit}
                validationSchema={advancedSchema}
            >
                {(isSubmitting) => (
                    <Form>
                        <CustomInput label='Kullanıcı Adı'
                            name="username"
                            type='text'
                            placeholder='Kullanıcı Adınızı Giriniz.'
                        />
                        <CustomSelect
                            label='Okulunuz'
                            name='university'
                            placeholder='Lütfen üniversitenizi seçiniz'
                        >
                            <option value='' >Lütfen Üniversitenizi seçiniz</option>
                            <option value='bogazici' >  Boğaziçi Üniversitesi</option>
                            <option value='gsu' >  Galatasaray Üniversitesi</option>
                            <option value='odtü' >  ODTÜ </option>
                            <option value='itü' >  İTÜ </option>
                        </CustomSelect>
                        <CustomCheckBox
                            type="checkbox"
                            name="isAccepted"
                        />
                        <button disabled={isSubmitting} type='submit'>Kaydet</button>
                        <Link to="/" className='formLink'>
                            Ana Forma Git</Link>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default PortalForm