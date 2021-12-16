import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
} from '@heroicons/react/outline';

function Sidebar() {
    return (
        <div>
            <button>
                <HomeIcon className="h-5 w-5" />
            </button>
            <button>
                <SearchIcon className="h-5 w-5" />
            </button>
            <button>
                <LibraryIcon className="h-5 w-5" />
            </button>
            <button>
                <PlusCircleIcon className="h-5 w-5" />
            </button>

        </div>
    )
}

export default Sidebar
