import CreateForm from "@/app/tickets/create/CreateForm";

const CreateTicket = () => {
    return (
        <>
            <main className="text-center">
                <h2>Add a New Ticket</h2>
                <CreateForm />
            </main>
        </>
    );
};

export default CreateTicket;