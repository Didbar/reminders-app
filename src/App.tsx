import ReminderList from './components/ReminderList'
import Reminder from './types/Reminder'

const reminders: Reminder[] = [
    { id: 1, title: 'Reminder 1' },
    { id: 2, title: 'Reminder 2' }
]
function App() {
    return (
        <div className='App'>
            <ReminderList items={reminders} />
        </div>
    )
}

export default App
