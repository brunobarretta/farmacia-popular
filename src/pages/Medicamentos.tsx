import Table from '../components/Table/Table';

const data = [
  { patologia: 'Asma', medicamento: 'brometo de ipratrópio 0,02mg' },
  { patologia: 'Asma', medicamento: 'brometo de ipratrópio 0,25mg' },
  { patologia: 'Asma', medicamento: 'dipropionato de beclometasona 200mcg' },
  { patologia: 'Asma', medicamento: 'dipropionato de beclometasona 250mcg' },
  { patologia: 'Asma', medicamento: 'dipropionato de beclometasona 50mcg' },
  { patologia: 'Asma', medicamento: 'sulfato de salbutamol 100mcg' },
  { patologia: 'Asma', medicamento: 'sulfato de salbutamol 5mg' },
  { patologia: 'Diabetes', medicamento: 'cloridrato de metformina 500mg' },
  { patologia: 'Diabetes', medicamento: 'cloridrato de metformina 500mg - ação prolongada' },
  { patologia: 'Diabetes', medicamento: 'cloridrato de metformina 850mg' },
  { patologia: 'Diabetes', medicamento: 'glibenclamida 5mg' },
  { patologia: 'Diabetes', medicamento: 'insulina humana regular 100ui/ml' },
  { patologia: 'Diabetes', medicamento: 'insulina humana 100ui/ml' },
  { patologia: 'Hipertensão', medicamento: 'atenolol 25mg' },
  { patologia: 'Hipertensão', medicamento: 'besilato de anlodipino 5 mg' },
  { patologia: 'Hipertensão', medicamento: 'captopril 25mg' },
  { patologia: 'Hipertensão', medicamento: 'cloridrato de propranolol 40mg' },
  { patologia: 'Hipertensão', medicamento: 'hidroclorotiazida 25mg' },
  { patologia: 'Hipertensão', medicamento: 'losartana potássica 50mg' },
  { patologia: 'Hipertensão', medicamento: 'maleato de enalapril 10mg' },
  { patologia: 'Hipertensão', medicamento: 'espironolactona 25 mg' },
  { patologia: 'Hipertensão', medicamento: 'furosemida 40 mg' },
  { patologia: 'Hipertensão', medicamento: 'succinato de metoprolol 25 mg' },
  { patologia: 'Anticoncepção', medicamento: 'acetato de medroxiprogesterona 150mg' },
  { patologia: 'Anticoncepção', medicamento: 'etinilestradiol 0,03mg + levonorgestrel 0,15mg' },
  { patologia: 'Anticoncepção', medicamento: 'noretisterona 0,35mg' },
  { patologia: 'Anticoncepção', medicamento: 'valerato de estradiol 5mg + enantato de noretisterona 50mg' },
  { patologia: 'Osteoporose', medicamento: 'alendronato de sódio 70mg' },
  { patologia: 'Dislipidemia', medicamento: 'sinvastatina 10mg' },
  { patologia: 'Dislipidemia', medicamento: 'sinvastatina 20mg' },
  { patologia: 'Dislipidemia', medicamento: 'sinvastatina 40mg' },
  { patologia: 'Doença de Parkinson', medicamento: 'carbidopa 25mg + levodopa 250mg' },
  { patologia: 'Doença de Parkinson', medicamento: 'cloridrato de benserazida 25mg + levodopa 100mg' },
  { patologia: 'Glaucoma', medicamento: 'maleato de timolol 2,5mg' },
  { patologia: 'Glaucoma', medicamento: 'maleato de timolol 5mg' },
  { patologia: 'Rinite', medicamento: 'budesonida 32mcg' },
  { patologia: 'Rinite', medicamento: 'budesonida 50mcg' },
  { patologia: 'Rinite', medicamento: 'dipropionato de beclometasona 50mcg/dose' },
  { patologia: 'Dignidade Menstrual', medicamento: 'absorvente higiênico' },
  { patologia: 'Diabetes Mellitus + Doença Cardiovascular', medicamento: 'dapagliflozina 10 mg' },
  { patologia: 'Incontinência', medicamento: 'fralda geriátrica' }
];

const columns = [
  {
    accessorKey: 'patologia',
    header: 'Patologia',
  },
  {
    accessorKey: 'medicamento',
    header: 'Medicamento',
  }
];

const MedicamentosTable = () => {
  
  return (
    <div className="h-[calc(100vh-72px)] py-5 px-10 flex flex-col items-center">
        <Table data={data} columns={columns} />
    </div>
  );
};

export default MedicamentosTable;
