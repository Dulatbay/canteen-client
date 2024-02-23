import {toast} from "react-toastify";

function App() {
    const handleSubmit = async () => {
        const id = document.getElementById("ID").value; // Получаем значение поля ID
        const resources = document.getElementById("account").value; // Получаем значение поля account

        try {
            const response = await fetch(`http://localhost:5050/account/${id}?res=${resources}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.status !== 200) {
                toast.error(response.message)
            }

        } catch (error) {
            toast.error("Failed to send request")
        }
    };

    return (
        <div className={"m-auto w-1/4 mt-10 bg-white rounded-2xl px-10 py-6"}>
            <div className={"m-auto w-full"}>
                <label htmlFor="ID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="ID" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="230107171" required />
            </div>
            <div className={"m-auto mt-5 w-full"}>
                <label htmlFor="account" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resources</label>
                <input type="text" id="account" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Resources" required />
            </div>
            <button onClick={handleSubmit} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5"}>SEND</button>
        </div>
    )
}

export default App;
