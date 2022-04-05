import { useState } from 'react'



const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('Please Enter A Text')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Enter a task" 
                value={text}
                onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div>
                <label>Day</label>
                <input 
                type="text" 
                placeholder="Enter a day" 
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div>
                <label>Set A Reminder</label>
                <input 
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>
            <div>
                <button type="submit">Set A Task</button>
            </div>
        </form>
    </div>
  )
}

export default AddTask
