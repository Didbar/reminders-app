import Reminder from '../types/Reminder'

interface ReminderListProps {
    items: Reminder[]
}
export default function ReminderList({ items }: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map((item) => (
                <li key={item.id} className='list-group-item'>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}
