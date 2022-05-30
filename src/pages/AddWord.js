import Body from "../components/Body"
import Button from "../components/Button"
import { FormInput2 } from '../components/FormInput'


function AddWord(){
    return(
        <Body>
            <form className="w-11/12 sm:w-10/12 md:w-on-400 mx-auto mt-8">
                <p className="font-bold text-2xl text-primary-500 text-center mb-11">Add New Word</p>
                <FormInput2 label="word" name="word" type="input"/>
                <FormInput2 label="word description" name="description"/>
                <FormInput2 label="reference" name="reference" type="input"/>
                <FormInput2 label="origin" name="origin" type="input"/>
                <div className="w-full flex justify-end gap-4">
                    <Button dark={false} name="back" large={false}/>
                    <Button dark={true} name="add word" large={false}/>
                </div>
            </form>
        </Body>
    )
}

export default AddWord