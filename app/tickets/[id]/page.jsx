//Creating a 404 page when a user selects a ticket page that doesn't exist
import {notFound} from "next/navigation";

export const dynamicParams = true;

//Enabling caching of ticket detail pages via static rendering
export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:4000/tickets');
    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id,
    }))
}

const getTicket = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        notFound();
    }
    return res.json();
}

const TicketDetail = async ({ params }) => {
    const { id } = await params;
    const ticket = await getTicket(id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className='card'>
                <h3>{ticket.title}</h3>
                <small>Created By {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
};

export default TicketDetail;
