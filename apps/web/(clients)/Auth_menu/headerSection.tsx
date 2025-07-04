import { Lock } from 'lucide-react';

interface IHS {
    heading: string,
    subHeading: string,
    icon: any
}

export default function HeaderSection (props: IHS) {
    return (
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
                {props.icon}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{props.heading}</h1>
            <p className="text-gray-600">{props.subHeading}</p>
        </div>
    )
}