
// const Button = props => {
//     return <button>{props.label}</button>
// }


const Button = ({label}) => {
    return <button>{label}</button>
}

export default function App() {
    const saveButtonProps = {
        label: 'Save'
    }
    return <div>
        {/* <Button label = {saveButtonProps.label}  /> */}
        <Button {...saveButtonProps} />
        <Button {...{ label: 'FindAll' }} />
    </div>
}