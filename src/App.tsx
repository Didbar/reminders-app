import { useState } from 'react'
import ReminderList from './components/ReminderList'
import Reminder from './types/Reminder'

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([])
    return (
        <div className='App'>
            <ReminderList items={reminders} />
        </div>
    )
}

export default App
