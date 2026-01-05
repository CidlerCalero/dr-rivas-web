"use client";
const staff = [
  { name: "Licda. Marta Torres", role: "Enfermera Jefe de Endoscopía", bio: "Lidera el equipo técnico con más de 15 años de experiencia en cuidados digestivos." },
  { name: "Lic. Sergio Osorio", role: "Licenciado en Anestesia", bio: "Experto en sedación asistida para garantizar que tus procedimientos sean sin dolor." },
  { name: "Srita. Fátima Torres", role: "Asistente de Endoscopía", bio: "Soporte técnico especializado en el manejo de equipos de alta tecnología." },
  { name: "Sra. Roxana de Abarca", role: "Atención al Paciente", bio: "Tu primer contacto. Se encarga de coordinar tus citas y seguimiento personalizado." },
];

const StaffDetail = () => {
  return (
    <section className="py-24 bg-neutralbg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary">Nuestro Staff Profesional</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Un equipo humano capacitado para acompañarte en cada paso de tu atención médica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staff.map((s, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-50">
              <div className="w-24 h-24 bg-blue-100 rounded-2xl shrink-0 flex items-center justify-center font-bold text-primary text-2xl">
                {s.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{s.name}</h3>
                <span className="text-accent font-bold text-xs uppercase tracking-widest">{s.role}</span>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffDetail;