"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

const CreateForm = () => {

    const router = useRouter();

    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const ticket = {
            title, body, priority, user_email: 'kofihelp@gmail.com'
        }

        const res = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(ticket),
        })

        if (res.status === 201) {
            router.refresh();
            router.push('/tickets');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
            <label>
                <span>Title:</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className='btn-primary'
                type="submit"
                disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Ticket'}
            </button>
        </form>
    );
};

export default CreateForm;