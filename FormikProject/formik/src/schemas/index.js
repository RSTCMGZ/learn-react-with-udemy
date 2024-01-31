import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



export const basicSchema = yup.object().shape({
    email: yup.string().email('Geçerli bir email giriniz').required('Email girmek zorunludur!'),
    age: yup.number().positive('Yaşınız negatif olamaz!').integer('Lütfen yaşınızı tam sayı giriniz.').required('Yaş girmek zorunludur!'),
    password: yup.string().min(5, 'En az 5 karakter giriniz!').matches(passwordRules, {
        message: 'Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz.'
    }).required('Şifre girmek zorunludur!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Şifreler eşleşmiyor!').required('Tekrar şifre girmek zorunludur!')

})


export const advancedSchema = yup.object().shape({
    username: yup.string().min(3, 'Kullanıcı adı minumum 3 karakter uzunluğunda olmalıdır!.').required('Kullanıcı adı zorunludur!'),
    university: yup.string().oneOf(['bogazici', 'gsu', 'odtü', 'itü'], 'Lütfen üniversitenizi seçiniz!').required('lütfen üniversitenizi seçiniz!'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul ediniz!'),
})