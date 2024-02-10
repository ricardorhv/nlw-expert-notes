export function NoteCard() {
  return (
    <button className="text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:outline hover:outline-2 hover:outline-slate-600 focus-visible:outline-2 focus-visible:outline-lime-400">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        blanditiis officia maiores ut asperiores ipsum alias dignissimos earum,
        explicabo unde voluptate voluptates deleniti veniam perferendis eaque
        delectus, iste esse porro.
      </p>

      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
