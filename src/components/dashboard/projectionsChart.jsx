import React from 'react'

    const ProjectionsChart = () => (
        <div className="bg-white p-6 rounded-lg shadow-sm h-80">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Projections vs Actuals</h3>
            
            {/* Y-axis labels */}
            <div className="flex h-52">
                <div className="flex flex-col justify-between text-sm text-gray-500 mr-4 py-2">
                    <span>30M</span>
                    <span>20M</span>
                    <span>10M</span>
                    <span>0</span>
                </div>
                
                {/* Bar chart area */}
                <div className="flex-1 flex items-end justify-between space-x-2 border-l border-b border-gray-200 pl-4 pb-2">
                    {/* Bars for each month */}
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '60px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">Jan</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '100px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">Feb</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '80px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">Mar</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '120px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">Apr</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '60px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">May</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-300 rounded-t" style={{height: '120px'}}></div>
                        <span className="text-xs text-gray-500 mt-2">Jun</span>
                    </div>
                </div>
            </div>
        </div>
    );

export default ProjectionsChart