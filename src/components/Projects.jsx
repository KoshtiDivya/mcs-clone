import React, { useState } from 'react';
import { Camera, MapPin, Eye, Filter, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import LightboxModal from './LightboxModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Fit-Out', 'Construction', 'Renovation', 'Maintenance'];

  // Combine featured and more projects
  const allProjects = [
    ...siteData.featuredGalleries.map(g => ({
      title: g.title,
      category: g.category.includes('Fit-Out') ? 'Fit-Out' : g.category.includes('Construction') ? 'Construction' : 'Renovation',
      location: g.location,
      desc: g.description,
      images: g.images,
      mainImage: g.images[0]?.url,
      caption: g.images[0]?.caption
    })),
    ...siteData.moreProjects.map(p => ({
      title: p.title,
      category: p.category.includes('Fit-Out') || p.category === 'Retail' ? 'Fit-Out' : p.category === 'Construction' ? 'Construction' : 'Maintenance',
      location: 'Muscat, Oman',
      desc: p.desc,
      images: [{ url: p.image, caption: p.title }],
      mainImage: p.image,
      caption: p.desc
    }))
  ];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-15 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Camera className="w-3.5 h-3.5" />
              <span>Selected Project Works</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recent works across Muscat and beyond.
            </h2>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Photographs taken on site during construction, retail fit-out, and renovation work delivered under Eng. Rafiqul Islam's personal supervision. Select any photo to inspect full screen.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Galleries (Qube Mall, Ghala Tower, Luxury Ceilings, Bank Dhofar) */}
        <div className="mt-12 space-y-10">
          {siteData.featuredGalleries
            .filter(g => activeCategory === 'All' || g.category.toLowerCase().includes(activeCategory.toLowerCase()))
            .map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo collage */}
                  <div className="lg:col-span-7 bg-slate-900/50 p-3 sm:p-4 grid grid-cols-2 gap-3">
                    {item.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage(img)}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-slate-800 ${item.images.length === 1 ? 'col-span-2 h-72 sm:h-96' : 'h-44 sm:h-52'
                          }`}
                      >
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="image-hover-overlay absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-2.5 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                            <Eye className="w-5 h-5 text-slate-950" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Details column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-amber-500" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {item.images.length} High-Res Visuals
                      </span>
                      <button
                        onClick={() => setLightboxImage(item.images[0])}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Gallery</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Additional Works Grid */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            More Completed Projects in Muscat
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.moreProjects
              .filter(p => activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase()))
              .map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage({ url: proj.image, caption: `${proj.title} — ${proj.desc}` })}
                  className="group bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-800">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-900/90 text-amber-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-slate-700">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Lightbox Viewer */}
      <LightboxModal
        isOpen={!!lightboxImage}
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
}
