

const Impressum = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
                <p>
                    <strong>Ruben Bertram</strong><br />
                    Am Burgfeld 9<br />
                    57319 Bad Berleburg
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Vertreten durch:</h2>
                <p>Ruben Bertram</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                <p>
                    Telefon: <a href="tel:02751325432" className="text-blue-600 underline">02751-325432</a><br />
                    E-Mail: <a href="mailto:MAIL" className="text-blue-600 underline">yolacraft64@gmail.com</a>
                </p>
            </section>
        </div>
    );
};

export default Impressum;
