
export const Subject = props => {
  const { subjects } = props
  return <>
    <ul>
      {/* CREATE li dynamically */}
      {
        subjects.map(subject => {
          return <li>{subject}</li>
        })
      }
    </ul>
  </>
}


export default function App() {
  const subjects = ['js', 'react', 'reactnative', 'flutter', 'android', 'ios']
  return <>
    <Subject subjects={subjects} />
  </>
}