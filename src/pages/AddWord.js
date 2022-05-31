import Body from "../components/Body"
import Button from "../components/Button"
import { FormInput2 } from '../components/FormInput'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddWord(){
    let initialValues = {
        word: '',
        description: '',
        reference: '',
        origin: ''
    }
    let validationSchema = () => {
        return Yup.object({
            word: Yup.string().required('word field is Required'),
            description: Yup.string().required('description field is Required'),
            reference: Yup.string().required('reference field is Required'),
            origin: Yup.string().required('origin field isRequired')
        })
    }
    let onSubmit = value => {
        console.log(value)
    }

    let formik = useFormik({initialValues, validationSchema, onSubmit})
    return(
        <Body>
            <form className="w-11/12 sm:w-10/12 md:w-on-400 mx-auto mt-8"  onSubmit={formik.handleSubmit}>
                <p className="font-bold text-2xl text-primary-500 text-center mb-11">Add New Word</p>
                <FormInput2 label="word" name="word" type="input" formik={formik}/>
                <FormInput2 label="word description" name="description" formik={formik}/>
                <FormInput2 label="reference" name="reference" type="input" formik={formik}/>
                <FormInput2 label="origin" name="origin" type="input" formik={formik}/>
                <div className="w-full flex justify-end gap-4">
                    <Button dark={false} name="back" large={false}/>
                    <Button dark={true} name="add word" large={false} type="submit"/>
                </div>
            </form>
        </Body>
    )
}

export default AddWord