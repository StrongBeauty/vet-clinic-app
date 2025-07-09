'use client';

import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RefreshIcon from '@mui/icons-material/Refresh';

export const Sort = (props: any) => <SwapVertIcon {...props} />;
export const SortUp = (props: any) => <ArrowUpwardIcon {...props} />;
export const SortDown = (props: any) => <ArrowDownwardIcon {...props} />;
export const ArrowDropDown = (props: any) => <ArrowDropDownIcon {...props} />;
export const ArrowDropUp = (props: any) => <ArrowDropUpIcon {...props} />;
export const Add = (props: any) => <AddIcon {...props} />;
export const Refresh = (props: any) => <RefreshIcon {...props} />;

// Icons with default props
export const Delete = (props: any) => <DeleteIcon className="text-danger" fontSize="large" {...props} />;
export const Edit = (props: any) => <EditIcon className="text-primary" fontSize="small" {...props} />;
