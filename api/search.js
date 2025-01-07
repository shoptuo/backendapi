export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { query } = req.body;

        // Beispiel: Dummy-Ergebnisse
        const results = [
            `Ergebnis 1 für ${query}`,
            `Ergebnis 2 für ${query}`
        ];

        res.status(200).json({ results });
    } else {
        res.status(405).json({ message: 'Methode nicht erlaubt!' });
    }
}
