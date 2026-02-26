import TicketsList from "@/app/tickets/TicketsList";

const News = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>

            <TicketsList />
        </main>
    );
};

export default News;