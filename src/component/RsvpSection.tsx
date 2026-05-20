import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Users, MessageSquareCode, CalendarCheck } from 'lucide-react';
import { GuestComment } from '../types';
import { DEFAULT_COMMENTS } from '../data/defaultComments';

export default function RsvpSection() {
  const [comments, setComments] = useState<GuestComment[]>([]);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState<GuestComment['relationship']>('Teman');
  const [isAttending, setIsAttending] = useState<GuestComment['isAttending']>('Hadir');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Hadir' | 'Keluarga' | 'Teman'>('All');
  const [waUrl, setWaUrl] = useState('');

  useEffect(() => {
    // Load comments from localStorage, fallback to DEFAULT_COMMENTS
    const stored = localStorage.getItem('wedding_comments_faisal_nisa');
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch (e) {
        setComments(DEFAULT_COMMENTS);
      }
    } else {
      setComments(DEFAULT_COMMENTS);
      localStorage.setItem('wedding_comments_faisal_nisa', JSON.stringify(DEFAULT_COMMENTS));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: GuestComment = {
      id: Date.now().toString(),
      name: name.trim(),
      relationship,
      isAttending,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('wedding_comments_faisal_nisa', JSON.stringify(updated));

    // Refined WhatsApp message generation
    const waNumber = '62882002572715';
    const statusText = isAttending === 'Hadir' ? 'Hadir ✅' : isAttending === 'Tidak Hadir' ? 'Tidak Hadir ❌' : 'Ragu-ragu ❓';
    
    const rawTemplate = 
      `Sampurasun Faisal & Nisa! ✦\n\n` +
      `Saya ingin mengonfirmasi kehadiran:\n` +
      `• *Nama:* ${newComment.name}\n` +
      `• *Hubungan:* ${newComment.relationship}\n` +
      `• *Konfirmasi:* ${statusText}\n\n` +
      `*Ucapan & Doa:* \n` +
      `"${newComment.message}"\n\n` +
      `Hatur nuhun! ✦`;

    const generatedUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(rawTemplate)}`;
    setWaUrl(generatedUrl);

    // Reset inputs and trigger success display
    setName('');
    setMessage('');
    setSubmitted(true);

    // Open WhatsApp in a new tab safely
    window.open(generatedUrl, '_blank');
  };

  const filteredComments = comments.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'Hadir') return c.isAttending === 'Hadir';
    if (filter === 'Keluarga') return c.relationship === 'Keluarga';
    if (filter === 'Teman') return c.relationship === 'Teman';
    return true;
  });

  const censorName = (fullName: string) => {
    if (!fullName) return '';
    return fullName
      .split(' ')
      .map(word => {
        const lower = word.toLowerCase();
        if (word === '&' || lower === 'dan' || lower === 'bin' || lower === 'binti') {
          return word;
        }
        if (word.startsWith('(') || word.endsWith(')')) {
          return '***';
        }
        if (word.length <= 2) {
          return word[0] + '*';
        }
        const first = word[0];
        const last = word[word.length - 1];
        return first + '*'.repeat(word.length - 2) + last;
      })
      .join(' ');
  };

  const getInitials = (fullname: string) => {
    if (!fullname) return '?';
    const split = fullname.split(' ');
    if (split.length > 1) {
      return (split[0][0] + split[1][0]).toUpperCase();
    }
    return fullname[0].toUpperCase();
  };

  const getRelationshipColor = (rel: GuestComment['relationship']) => {
    switch (rel) {
      case 'Keluarga': return 'bg-terracotta-100 text-terracotta-700 border-terracotta-200/50';
      case 'Teman': return 'bg-sage-100 text-sage-700 border-sage-200/50';
      case 'Rekan': return 'bg-blue-50 text-blue-700 border-blue-100';
      default: return 'bg-sand-200 text-charcoal-500/80 border-sand-300';
    }
  };

  const getPresenceStyles = (att: GuestComment['isAttending']) => {
    switch (att) {
      case 'Hadir': return { text: 'Hadir', badge: 'bg-green-50 text-green-700 border-green-200/40' };
      case 'Tidak Hadir': return { text: 'Absen', badge: 'bg-red-50 text-red-600 border-red-200/40' };
      default: return { text: 'Ragu-ragu', badge: 'bg-amber-50 text-amber-700 border-amber-200/40' };
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-12 px-4 bg-cream-100 flex flex-col items-center overflow-hidden border-b-2 border-charcoal-500">
      
      <div className="w-full flex flex-col gap-8">
        
        {/* Left Hand: RSVP Submission Card - Bento Styled */}
        <div className="w-full bg-[#FCFAF5] border-2 border-charcoal-500 p-6 sm:p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-300 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 inset-x-0 h-2 bg-terracotta-500" />
          
          <div className="mb-6">
            <span className="font-mono text-[9px] tracking-widest text-sage-600 uppercase block mb-1 font-extrabold">
              ✦ BUKU TAMU &amp; RSVP ✦
            </span>
            <h2 className="font-serif text-2xl font-bold text-charcoal-500">Konfirmasi Kehadiran</h2>
            <div className="w-16 h-1 bg-charcoal-500 mt-2.5 rounded-full" />
          </div>

          {submitted ? (
            <div className="bg-[#FCFAF5] border-2 border-charcoal-500 p-6 rounded-2xl text-center space-y-4 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] animate-fade-in relative z-10">
              <CheckCircle2 className="w-8 h-8 text-sage-500 mx-auto animate-bounce font-bold" />
              <h3 className="font-serif text-lg font-bold text-charcoal-500">Doa &amp; RSVP Terkirim!</h3>
              <p className="font-sans text-xs text-charcoal-500/80 leading-relaxed font-semibold">
                Hatur nuhun pisan atas konfirmasi dan ucapan doa terbaiknya untuk Faisal &amp; Nisa. Kabar baik Anda telah tercatat dengan aman di Wishes Wall.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                {waUrl && (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans font-extrabold text-[11px] tracking-widest rounded-xl transition-all border-2 border-charcoal-500 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] hover:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] hover:translate-y-0.5 cursor-pointer"
                  >
                    <span>KIRIM ULANG VIA WHATSAPP 💬</span>
                  </a>
                )}
                
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-4 bg-cream-200 hover:bg-cream-300 text-charcoal-500 font-mono text-[9px] tracking-widest rounded-xl transition-all border-2 border-charcoal-500 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] hover:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] hover:translate-y-0.5 uppercase font-bold cursor-pointer"
                >
                  ✎ Tulis Ucapan Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block font-mono text-[10px] text-charcoal-500/70 uppercase mb-1.5 font-bold">Nama Lengkap</label>
                <input
                  id="input-guest-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Contoh: Usep Kaswari"
                  className="w-full px-3.5 py-3 text-xs sm:text-sm bg-[#FCFAF5] border-2 border-charcoal-500 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-charcoal-500 placeholder-charcoal-500/40 font-bold transition-all shadow-inner"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] text-charcoal-500/70 uppercase mb-1.5 font-bold">Hubungan</label>
                  <select
                    id="select-guest-relation"
                    value={relationship}
                    onChange={e => setRelationship(e.target.value as any)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm bg-[#FCFAF5] border-2 border-charcoal-500 rounded-xl focus:bg-white focus:outline-none text-charcoal-500 font-bold transition-all font-sans cursor-pointer"
                  >
                    <option value="Teman">Teman</option>
                    <option value="Keluarga">Keluarga</option>
                    <option value="Rekan">Rekan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-charcoal-500/70 uppercase mb-1.5 font-bold">Konfirmasi</label>
                  <select
                    id="select-guest-attendance"
                    value={isAttending}
                    onChange={e => setIsAttending(e.target.value as any)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm bg-[#FCFAF5] border-2 border-charcoal-500 rounded-xl focus:bg-white focus:outline-none text-charcoal-500 font-bold transition-all font-sans cursor-pointer"
                  >
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                    <option value="Ragu-ragu">Ragu-ragu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-charcoal-500/70 uppercase mb-1.5 font-bold">Ucapan &amp; Doa Restu</label>
                <textarea
                  id="textarea-guest-message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan selamat dan doa terbaikmu untuk Faisal & Nisa di sini..."
                  className="w-full px-3.5 py-3 text-xs sm:text-sm bg-[#FCFAF5] border-2 border-charcoal-500 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-charcoal-500 placeholder-charcoal-500/40 font-bold transition-all shadow-inner resize-none font-sans"
                />
              </div>

              <button
                id="btn-submit-rsvp"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-[#3B5F43] hover:bg-[#2C4732] text-cream-50 font-sans font-extrabold text-xs tracking-widest rounded-xl transition-all border-2 border-charcoal-500 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] hover:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer uppercase"
              >
                <Send className="w-3.5 h-3.5" />
                <span>KIRIM UCAPAN</span>
              </button>

              <div className="text-center">
                <p className="font-mono text-[9px] text-charcoal-500/60 leading-relaxed font-bold uppercase transition-colors hover:text-charcoal-500">
                  ✦ Konfirmasi otomatis terkirim ke Wishes Wall &amp; terhubung ke WhatsApp host (0882-0025-72715) ✦
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Right Hand: Public Wishing Wall / Guestbook Comments */}
        <div className="w-full bg-[#FCFAF5] border-2 border-charcoal-500 p-6 sm:p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col h-[530px] group cursor-pointer">
          {/* List Headers & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b-2 border-charcoal-500 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-[#3B5F43] font-bold" />
              <span className="font-serif text-sm font-bold text-charcoal-500 uppercase tracking-wide">
                Wishes Wall ({comments.length})
              </span>
            </div>
            
            {/* Minimal Filter Tabs - Bento Badge style */}
            <div className="flex gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-charcoal-500/20">
              {(['All', 'Hadir', 'Keluarga', 'Teman'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 text-[10px] sm:text-xs font-sans rounded-lg transition-all font-bold ${
                    filter === f
                      ? 'bg-charcoal-500 text-cream-50 shadow-xs'
                      : 'text-charcoal-500/60 hover:text-charcoal-500'
                  }`}
                >
                  {f === 'All' ? 'Semua' : f}
                </button>
              ))}
            </div>
          </div>

          {/* List of comments scrolling organically */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
            {filteredComments.length === 0 ? (
              <div className="text-center py-12 text-charcoal-500/40 font-sans text-xs italic font-bold">
                Belum ada ucapan dengan kategori ini.
              </div>
            ) : (
              filteredComments.map(comment => {
                const presence = getPresenceStyles(comment.isAttending);
                return (
                  <div
                    key={comment.id}
                    className="flex gap-4 p-4 bg-cream-50 border-2 border-charcoal-500 rounded-2xl hover:translate-y-[-1px] transition-transform shadow-[3px_3px_0px_0px_rgba(45,41,38,1)]"
                  >
                    {/* Circle Avatar with custom initials */}
                    <div className="w-11 h-11 rounded-xl bg-sand-300 border-2 border-charcoal-500 shrink-0 flex items-center justify-center font-serif text-xs font-bold text-charcoal-500 uppercase shadow-[2px_2px_0px_0px_rgba(45,41,38,0.2)]">
                      {getInitials(comment.name)}
                    </div>

                    {/* Content text */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-charcoal-850 leading-tight">
                          {censorName(comment.name)}
                        </h4>
                        
                        {/* Status elements */}
                        <div className="flex gap-1.5">
                          <span className={`px-2 py-0.5 border border-charcoal-500/20 text-[9px] font-mono tracking-wider uppercase rounded-md font-bold ${getRelationshipColor(comment.relationship)}`}>
                            {comment.relationship}
                          </span>
                          <span className={`px-2 py-0.5 border border-charcoal-500/20 text-[9px] font-mono tracking-wider uppercase rounded-md font-bold ${presence.badge}`}>
                            {presence.text}
                          </span>
                        </div>
                      </div>

                      <p className="font-sans text-[11px] sm:text-xs text-charcoal-500 font-semibold leading-relaxed break-words whitespace-pre-wrap">
                        {comment.message}
                      </p>

                      <span className="block font-mono text-[8px] text-charcoal-500/45 text-right font-bold">
                        {new Date(comment.timestamp).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
