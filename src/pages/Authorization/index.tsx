import styles from "./auth.module.scss";
import { Form, Formik, Field } from "formik";
import { useState } from "react";




const Authorization = () => {
    const [pageType, setPageType] = useState<string>('login');
    const isLogin = pageType === 'login';
    const isRegister = pageType === 'register';


    const handleFormSubmit = async () => {
        console.log("ты лох")
        if(isLogin) {};
        if(isRegister) {}; 
    }

    return(
        <div className={styles.container}>
            <div>
                <h1>{isLogin? "Авторизация":"Регистрация"}</h1>
                <Formik 
                initialValues={{nickname:"", password:""}}
                onSubmit={handleFormSubmit}
                >
                {()=>(
                    <Form>
                        <div className={styles.fields}>
                        <div className={styles.formGroup}>
                            <label htmlFor="nickname">Никнейм:</label>
                            <Field name="nickname" className={styles.formControl}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Пароль:</label>
                            <Field name="password" className={styles.formControl}/>
                        </div>
                        </div>
                        <button className={styles.submitBtn} type="submit">{isLogin? "Войти" : "Создать аккаунт"}</button>
                        <button type="button" onClick={()=> isLogin? setPageType('register') : setPageType('login')} className={styles.registerBtn}>{isLogin?"Создать аккаунт":"У меня уже есть аккаунт"}</button>
                    </Form>
                )

                }
                </Formik>
            </div>
        </div>
    )
}

export default Authorization