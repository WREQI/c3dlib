import { useState } from 'react';
import { toast } from 'sonner';
import {
  Trash2,
  FileText,
  RotateCcw,
  Trash,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { MOCK_TRASH_ITEMS } from '@/data/cad';

export default function CadTrashPage() {
  const [items, setItems] = useState(MOCK_TRASH_ITEMS);

  const handleRestore = (id: string, name: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success(`Restored "${name}"`);
  };

  const handleDelete = (id: string, name: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success(`Permanently deleted "${name}"`);
  };

  const handleRestoreAll = () => {
    toast.success(`Restored ${items.length} items`);
    setItems([]);
  };

  const handleEmptyTrash = () => {
    toast.success('Trash emptied');
    setItems([]);
  };

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Trash2 className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">Trash</span>
        <span className="text-xs text-[#5f6368]">({items.length})</span>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-2">
        <Button
          size="sm"
          variant="outline"
          className="h-7 border-[#dadce0] text-xs text-[#333] hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
          onClick={handleRestoreAll}
          disabled={items.length === 0}
        >
          <RotateCcw className="mr-1.5 h-3 w-3" />
          Restore all
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="h-7 border-[#dadce0] text-xs text-[#d93025] hover:bg-[#fce8e6] hover:text-[#c5221f]"
              disabled={items.length === 0}
            >
              <Trash className="mr-1.5 h-3 w-3" />
              Empty Trash
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-96">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-sm">Empty Trash?</AlertDialogTitle>
              <AlertDialogDescription className="text-xs">
                This will permanently delete {items.length} item{items.length !== 1 ? 's' : ''}. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="h-7 text-xs">Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleEmptyTrash}
                className="h-7 bg-[#d93025] text-xs hover:bg-[#c5221f]"
              >
                Empty Trash
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <div className="flex h-80 flex-col items-center justify-center text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#f1f3f4]">
              <Trash2 className="h-8 w-8 text-[#9aa0a6]" />
            </div>
            <div className="text-sm font-medium text-[#333]">Trash is empty</div>
            <div className="mt-1 text-xs text-[#5f6368]">
              Items in the Trash are automatically deleted after 30 days.
            </div>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-5 gap-2 border-b border-[#e0e0e0] bg-[#f8f9fa] px-4 py-1.5 text-[11px] font-medium text-[#5f6368]">
              <div>Name</div>
              <div className="border-l border-[#e0e0e0] pl-2">Deleted</div>
              <div className="border-l border-[#e0e0e0] pl-2">Modified</div>
              <div className="border-l border-[#e0e0e0] pl-2">Owned by</div>
              <div className="border-l border-[#e0e0e0] pl-2 text-right">Actions</div>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 items-center gap-2 border-b border-[#f1f3f4] px-4 py-1.5 text-xs hover:bg-[#f8f9fa]"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <FileText className="h-4 w-4 shrink-0 text-[#9aa0a6]" />
                  <span className="truncate text-[#5f6368] line-through decoration-[#dadce0]">
                    {item.name}
                  </span>
                </div>
                <div className="truncate text-[#5f6368]">{item.deletedAt}</div>
                <div className="truncate text-[#5f6368]">{item.modified}</div>
                <div className="truncate text-[#5f6368]">{item.ownedBy}</div>
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => handleRestore(item.id, item.name)}
                    className="flex h-6 items-center gap-1 rounded px-2 text-[10px] font-medium text-[#1a73e8] hover:bg-[#e8f0fe]"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Restore
                  </button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="flex h-6 items-center gap-1 rounded px-2 text-[10px] font-medium text-[#d93025] hover:bg-[#fce8e6]">
                        <Trash className="h-3 w-3" />
                        Delete
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-96">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-sm">Permanently delete?</AlertDialogTitle>
                        <AlertDialogDescription className="text-xs">
                          "{item.name}" will be permanently deleted. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="h-7 text-xs">Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(item.id, item.name)}
                          className="h-7 bg-[#d93025] text-xs hover:bg-[#c5221f]"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
