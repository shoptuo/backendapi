export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { query } = req.body;
        
        // Beispiel: Verarbeitung der Suche
        const result = [`Ergebnis für ${query}: Kleid A`, `Ergebnis für ${query}: Kleid B`];
        
        res.status(200).json({ results: result });
    } else {
        res.status(405).json({ message: 'Methode nicht erlaubt!' });
    }
}
