import { useState } from 'react'

interface TodoFormProps {
    onSubmit: (text: string) => void
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        if (!inputValue) return
        onSubmit(inputValue)
        setInputValue('')
    }

    return (
        <div className="input-group">
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}
