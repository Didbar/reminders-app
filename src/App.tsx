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
    const addReminder = async (title: string) => {
        const newReminder = await reminderService.addReminder(title)
        setReminders([newReminder, ...reminders])
    }

    useEffect(() => {
        loadReminders()
    }, [])
    return (
        <div className='App'>
            <NewReminder onAddReminder={addReminder} />
            <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
    )
}

export default App
