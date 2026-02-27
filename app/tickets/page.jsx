import TicketsList from "@/app/tickets/TicketsList";
import {Suspense} from "react";
import Loading from "@/app/loading";

const Tickets = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>

            <Suspense fallback={<Loading />}>
                <TicketsList/>
            </Suspense>
        </main>
    );
};

export default Tickets;