import Image from 'next/image';
import { Clock, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const GiftCardSection = () => {
    const email = 'jalkaterapia.pinja@gmail.com';
    const phoneTel = '+358451032606';
    const mailto = `mailto:${email}?subject=${encodeURIComponent('Lahjakortin osto')}&body=${encodeURIComponent(
        'Hei!\n\nHaluaisin ostaa lahjakortin.\n\n• Lahjakortin summa tai palvelu: \n• Toivottu toimitustapa (sähköinen / nouto): \n• Lahjan saajan nimi (halutessasi): \n\nYstävällisin terveisin,\n'
    )}`;

    return (
        <section aria-labelledby="giftcard-title" className="w-full">
            <div className="mx-auto">
                <div className="mx-auto max-w-3xl">
                    <h2 id="giftcard-title" className="text-center">
                        Lahjakortti
                    </h2>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-black/5">
                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative min-h-[260px] lg:min-h-[420px]">
                            <Image
                                src="/images/lahjakortti-kasi.jpg"
                                alt="Lahjakortti"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/70 p-4 backdrop-blur-sm ring-1 ring-black/5">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                        <Sparkles className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <div className="text-left">
                                        <p className="mb-0 font-semibold text-black">Helppo ja ihana lahja</p>
                                        <p className="mb-0 text-sm text-muted-foreground">
                                            Tilaa lahjakortti helposti sähköpostilla tai puhelimitse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-left sm:p-8">
                            <h3 className="mb-3">Miten lahjakortti toimii?</h3>
                            <div className="space-y-3">
                                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Clock className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <p className="mb-0 text-muted-foreground">
                                        <strong className="text-black">Voimassa 4 kuukautta</strong> ostopäivästä. Varaus tehdään voimassaoloaikana, vaikka aika menisi pidemmälle.
                                    </p>
                                </div>
                                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Mail className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <p className="mb-0 text-muted-foreground">
                                        <strong className="text-black">Tilaa sähköpostitse</strong> ja kerro summa/palvelu sekä toimitustapa (sähköinen / nouto).
                                    </p>
                                </div>
                                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Phone className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <p className="mb-0 text-muted-foreground">
                                        <strong className="text-black">Soita</strong>, niin sovitaan lahjakortti ja toimitus nopeasti.
                                    </p>
                                </div>
                                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <p className="mb-0 text-muted-foreground">
                                        Jos suunnittelet tulevasi hoitolalle, <strong className="text-black">sovi tulostasi etukäteen</strong>, jotta olen paikalla.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <a
                                    href={mailto}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
                                >
                                    <Mail className="h-5 w-5" aria-hidden="true" />
                                    Tilaa
                                </a>
                                <a
                                    href={`tel:${phoneTel}`}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-transparent px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
                                >
                                    <Phone className="h-5 w-5" aria-hidden="true" />
                                    Soita
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftCardSection;