import { useEffect, useState } from 'react'
import ReminderList from './components/ReminderList'
import Reminder from './types/Reminder'
import reminderService from './services/reminder'
import NewReminder from './components/NewReminder'

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([])

    const loadReminders = async () => {
        const reminders = await reminderService.getReminders()
        setReminders(reminders)
    }
    const removeReminder = (id: number) => {
        setReminders(reminders.filter((item) => item.id !== id))
    }

    useEffect(() => {
        loadReminders()
    }, [])
    return (
        <div className='App'>
            <NewReminder />
            <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
    )
}

export default App
